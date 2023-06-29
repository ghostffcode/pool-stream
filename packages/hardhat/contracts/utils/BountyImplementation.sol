// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// NOTE: WIP Bounty Contract

contract BountyImplementation {
    struct Bounty {
        string metaPtr;
        address token;
        uint256 amount;
        uint256 projectId;
        bool resolved;
    }

    uint256 public totalBounties;

    mapping(uint256 => Bounty) public bounties;

    event BountyCreated(uint256 bountyId);
    event BountyResolved(uint256 bountyId, address to, string resolution);

    function _createBounty(
        uint256 projectId,
        uint256 amount,
        address token,
        string calldata metaPtr
    ) internal {
        totalBounties += 1;

        bounties[totalBounties] = Bounty(
            metaPtr,
            token,
            amount,
            projectId,
            false
        );

        emit BountyCreated(totalBounties);
    }

    function _resolveBounty(
        uint256 bountyId,
        address to,
        string calldata resolution
    ) internal {
        require(
            bounties[bountyId].resolved == false,
            "This bounty is already resolved"
        );

        emit BountyResolved(bountyId, to, resolution);
    }
}
