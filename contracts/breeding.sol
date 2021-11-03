pragma solidity ^0.8.0;

contract Breeding {
  //example code to select random input to choose for child NFT
  uint256 mum = 1234567890098765;
  uint256 dad = 0987654321123456;

  uint256 mumfirst2 = (mum / 100000000000000);
  uint256 dadfirst2 = (dad / 100000000000000);

  function _randompick(uint256 _mum, uint256 _dad) internal returns(uint){
    //find a way to have computer choose between two inputs..
  }
}
