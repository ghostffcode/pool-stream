// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract ProjectsImplementation {
    enum PROJECTSTATUS {
        NOT_STARTED,
        ACTIVE,
        PAUSED,
        COMPLETED,
        MAINTENANCE
    }

    struct Project {
        string metaPtr;
        PROJECTSTATUS status;
    }

    uint256 public totalProjects;

    mapping(uint256 => Project) public projects;
    mapping(bytes32 => uint256) public projectTokenCost;

    event ProjectCreated(uint256 projectId, string metaPtr);
    event ProjectMetaPtrUpdated(uint256 projectId, string metaPtr);
    event ProjectStatusUpdated(uint256 projectId, PROJECTSTATUS status);
    event ProjectCostUpdated(
        uint256 projectId,
        address token,
        uint256 additionalCost
    );
    event AddLogForProject(address from, uint256 projectId, string message);

    modifier projectExists(uint256 projectId) {
        require(projectId < totalProjects, "This project does not exist");
        _;
    }

    function _createProject(string calldata metaPtr, bool paused) internal {
        totalProjects += 1;

        projects[totalProjects] = Project({
            metaPtr: metaPtr,
            status: paused ? PROJECTSTATUS.PAUSED : PROJECTSTATUS.ACTIVE
        });

        emit ProjectCreated(totalProjects, metaPtr);
    }

    function _changeProjectMeta(
        uint256 projectId,
        string calldata metaPtr
    ) internal projectExists(projectId) {
        require(
            bytes(metaPtr).length > 0,
            "New Project metaPtr can't be empty"
        );

        projects[projectId].metaPtr = metaPtr;

        emit ProjectMetaPtrUpdated(projectId, metaPtr);
    }

    function _changeProjectStatus(
        uint256 projectId,
        PROJECTSTATUS status
    ) internal projectExists(projectId) {
        require(
            status != PROJECTSTATUS.NOT_STARTED,
            "This project can't be set to not started status"
        );
        projects[projectId].status = status;

        emit ProjectStatusUpdated(projectId, status);
    }

    function _updateProjectCost(
        uint256 projectId,
        address tokenAddress,
        uint256 _additionalCost
    ) internal projectExists(projectId) {
        projectTokenCost[
            keccak256(abi.encode(projectId, tokenAddress))
        ] += _additionalCost;

        emit ProjectCostUpdated(projectId, tokenAddress, _additionalCost);
    }
}
