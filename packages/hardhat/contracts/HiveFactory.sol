//SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import {Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {HiveImplementation} from "./HiveImplementation.sol";

contract HiveFactory is Ownable2Step {
    address public implementationAddress;

    event HiveCreated(address hive, string description);
    event HiveImplementationUpdated(address hive, address by);

    constructor() {
        HiveImplementation implementation = new HiveImplementation();
        implementation.initialize(address(this), "");

        updateImplementation(implementation);

        _transferOwnership(msg.sender);
    }

    function updateImplementation(HiveImplementation newHive) public onlyOwner {
        implementationAddress = address(newHive);

        emit HiveImplementationUpdated(address(newHive), msg.sender);
    }

    function createHive(bytes calldata data) public {
        address clone = Clones.clone(implementationAddress);

        HiveImplementation(payable(clone)).initialize(msg.sender, data);

        (string memory descriptionPtr, ) = abi.decode(data, (string, address));

        emit HiveCreated(clone, descriptionPtr);
    }
}
