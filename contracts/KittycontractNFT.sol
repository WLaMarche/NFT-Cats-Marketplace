pragma solidity ^0.5.12;

import "./IERC721.sol";

contract KittycontractNFT is IERC721 {

  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

  string public _tokenName = "WaterstoneKittys";
  string public _tokenSymbol = "WSK";

  mapping(address => uint256) balances;
  mapping(uint256 => address) ownerOfNFT;

  struct Kittys {
    uint256 gene;
    uint32 momID;
    uint32 dadID;
    uint64 birthTime;
    uint16 generation;
  }

  Kittys[] kittys;

  uint _totalSupply = kittys.length;

  /**
   * @dev Returns the number of tokens in ``owner``'s account.
   */
  function balanceOf(address owner) external view returns (uint256 balance){
    //we need it to return a balance of an owner --> mapping
    return balances[owner]; //need to create a 'balances' mapping
  }

  /*
   * @dev Returns the total number of tokens in circulation.
   */
  function totalSupply() external view returns (uint256 total){
    return _totalSupply;
  }

  /*
   * @dev Returns the name of the token.
   */
  function name() external view returns (string memory tokenName){
    return _tokenName;
  }

  /*
   * @dev Returns the symbol of the token.
   */
  function symbol() external view returns (string memory tokenSymbol){
    return _tokenSymbol;
  }

  /**
   * @dev Returns the owner of the `tokenId` token.
   *
   * Requirements:
   *
   * - `tokenId` must exist.
   */
  function ownerOf(uint256 tokenId) external view returns (address owner){
    return ownerOfNFT[tokenId];
  }

  /* @dev Transfers `tokenId` token from `msg.sender` to `to`.
  *
  * Requirements:
  *
  * - `to` cannot be the zero address.
  * - `to` can not be the contract address.
  * - `tokenId` token must be owned by `msg.sender`.
  *
  * Emits a {Transfer} event.
  */
  function transfer(address _to, uint256 _tokenId) external{
    require(_to != address(0), "ERC721: Transfer is to the 0 address!");
    require(_to != address(this), "ERC721: Transfer is not supported to this contract");
    require(ownerOfNFT[_tokenId] == msg.sender, "ERC721: Sender does not own this NFT.");

    _transfer(msg.sender, _to, _tokenId);

  }
  function _transfer(address _from, address _to, uint256 _tokenID) internal {
    //increment balance of 'to' address + 1
    balances[_to] += 1;

    //Assign the NFT to the '_to' address
    ownerOfNFT[_tokenID] = _to;

    //if '_from' address is not the 0 address (aka not a newly minted coin being transferred)...
    //decrement the balance of the '_from' address by - 1
    if(_from != address(0)){
      balances[_from] -= 1;
    }

    emit Transfer(_from, _to, _tokenID);
  }


}
