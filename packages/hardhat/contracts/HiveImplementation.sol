// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {Initializable} from "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ProjectsImplementation} from "./utils/ProjectsImplementation.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import {LogImplementation} from "./utils/LogImplementation.sol";

contract HiveImplementation is
    ProjectsImplementation,
    AccessControl,
    Initializable,
    ReentrancyGuard
{
    using SafeERC20 for IERC20;

    bytes32 public constant ADMIN_ROLE = keccak256("QUEEN_BEE");

    struct Stream {
        address bee;
        address token;
        uint256 start;
        uint256 rate; // how many wei per second
    }

    mapping(address => Stream) public streams;

    event HiveInitialized(string descriptionPtr);
    event StreamCreated(
        address indexed queen,
        address indexed bee,
        address token,
        uint256 rate
    );
    event StreamEdited(
        address indexed queen,
        address indexed bee,
        address token,
        uint256 newRate
    );
    event WithdrawnFromStream(
        address indexed bee,
        uint256 amount,
        address to,
        string reason
    );
    event QueenRoleGranted(address indexed grantedTo);
    event QueenRoleRevoked(address indexed revokedFrom);
    event StreamFunded(address indexed from, uint256 amount, string reason);

    modifier streamExists(address bee) {
        require(streams[bee].rate > 0, "This stream does not exist");
        _;
    }

    function initialize(address queen, bytes calldata data) public initializer {
        _setRoleAdmin(ADMIN_ROLE, ADMIN_ROLE);
        _setupRole(ADMIN_ROLE, queen);

        string memory descriptionPtr = abi.decode(data, (string));

        emit HiveInitialized(descriptionPtr);
        emit QueenRoleGranted(queen);
    }

    function createStream(
        address bee,
        address token,
        uint256 rate
    ) public payable onlyRole(ADMIN_ROLE) {
        require(streams[bee].rate == 0, "Stream for user already exists");
        streams[bee] = Stream({
            bee: bee,
            token: token,
            start: block.timestamp,
            rate: rate
        });

        emit StreamCreated(msg.sender, bee, token, rate);
    }

    function editStreamRate(
        address bee,
        uint256 newRate
    ) public onlyRole(ADMIN_ROLE) streamExists(bee) {
        streams[bee].rate = newRate;

        emit StreamEdited(msg.sender, bee, streams[bee].token, newRate);
    }

    function editStreamToken(
        address bee,
        address token
    ) public onlyRole(ADMIN_ROLE) streamExists(bee) {
        streams[bee].token = token;

        emit StreamEdited(msg.sender, bee, token, streams[bee].rate);
    }

    function createStreams(
        address[] calldata bees,
        address[] calldata token,
        uint256[] calldata rates
    ) public onlyRole(ADMIN_ROLE) {
        require(
            (bees.length == token.length) && (token.length == rates.length),
            "Bees, token & rates mismatch"
        );

        for (uint256 i = 0; i < bees.length; i++) {
            createStream(bees[i], token[i], rates[i]);
        }
    }

    function createProject(
        string calldata metaPtr,
        bool paused
    ) public onlyRole(ADMIN_ROLE) {
        _createProject(metaPtr, paused);
    }

    function changeProjectMeta(
        uint256 projectId,
        string calldata metaPtr
    ) public onlyRole(ADMIN_ROLE) {
        _changeProjectMeta(projectId, metaPtr);
    }

    function changeProjectStatus(
        uint256 projectId,
        PROJECTSTATUS status
    ) public onlyRole(ADMIN_ROLE) {
        _changeProjectStatus(projectId, status);
    }

    function withdrawFromStream(
        uint256 amountToPay,
        address to,
        uint256 projectId,
        string memory reason
    ) public nonReentrant {
        Stream storage stream = streams[msg.sender];

        require(
            msg.sender == stream.bee,
            "Only the bee can withdraw from the stream"
        );

        uint256 elapsedTime = block.timestamp - stream.start;
        uint256 dueAmount = elapsedTime * stream.rate;

        require(
            dueAmount > amountToPay,
            "Not enough streamed for withdrawal amount yet"
        );

        address withdrawTo = (to == address(0)) ? msg.sender : to;

        if (stream.token == address(0)) {
            require(
                address(this).balance >= amountToPay,
                "Pool balance is not enough for payout"
            );

            (bool success, ) = withdrawTo.call{value: amountToPay}("");

            require(success, "Couldn't payout");
        } else {
            IERC20(stream.token).safeTransfer(withdrawTo, amountToPay);
        }

        _updateProjectCost(projectId, stream.token, amountToPay);

        emit WithdrawnFromStream(msg.sender, amountToPay, withdrawTo, reason);
    }

    function addLogMessage(
        uint256 projectId,
        string calldata message
    ) public projectExists(projectId) {
        require(
            msg.sender == streams[msg.sender].bee,
            "Only the bee can add a log"
        );
        require(bytes(message).length > 0, "No log message provided");

        emit AddLogForProject(msg.sender, projectId, message);
    }

    function getStream(
        address bee
    )
        public
        view
        returns (address recipient, address token, uint256 start, uint256 rate)
    {
        Stream memory stream = streams[bee];
        return (stream.bee, stream.token, stream.start, stream.rate);
    }

    // Add roles functionality
    function addQueenBee(address _queen) public {
        require(hasRole(ADMIN_ROLE, msg.sender), "Caller is not a queen bee");
        grantRole(ADMIN_ROLE, _queen);
        emit QueenRoleGranted(_queen);
    }

    function removeQueen(address _queen) public {
        require(hasRole(ADMIN_ROLE, msg.sender), "Caller is not a queen bee");
        revokeRole(ADMIN_ROLE, _queen);
        emit QueenRoleRevoked(_queen);
    }

    // Add token rescue functionality

    function rescueERC721(
        IERC721 token,
        address to,
        uint256 tokenId
    ) public onlyRole(ADMIN_ROLE) {
        token.safeTransferFrom(address(this), to, tokenId);
    }

    function funStream(string memory reason) public payable {
        emit StreamFunded(msg.sender, msg.value, reason);
    }

    receive() external payable {
        funStream("");
    }
}
