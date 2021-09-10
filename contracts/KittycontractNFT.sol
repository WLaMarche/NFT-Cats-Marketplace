pragma solidity ^0.5.12;

import "./IERC721.sol";

contract KittycontractNFT is IERC721 {

  mapping(address => uint256) nftTokenCount;
  /**
   * @dev Returns the number of tokens in ``owner``'s account.
   */
  function balanceOf(address owner) external view returns (uint256 balance){
    //we need it to return a balance of an owner --> mapping
    return nftTokenCount[owner]; //need to create a 'balances' mapping
  }

}
