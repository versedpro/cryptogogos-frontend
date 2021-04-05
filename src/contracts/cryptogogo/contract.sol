// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.6/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.6/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.6/contracts/access/Ownable.sol";

contract CryptoGogos is Ownable, ERC721 {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; //Counter is a struct in the Counters library
   
    string internal _tokenURI;
    address _address;
    
    constructor() ERC721("GOGOS", "GOG") public {
        _address = msg.sender;
    }
    
    
    //Cards is actually to create a mapping of token id to their tokenURI
    struct Cards{
        string name;
        string cat;
        uint card_id; //series number in our case
        string description;
        string image_url;
        string tokenuri;
    }
    
    Cards[] private card;
    
    mapping(uint =>Cards) public tokeninfo;
    
    
    function drawCard(string memory name, string memory description,string memory category) public {
     
        _tokenIds.increment();
        uint newNftTokenId = _tokenIds.current();
        
        Cards memory c;
    
        c.card_id = newNftTokenId;
        c.name = n;
        c.description = d;
        c.cat= ct;
        
        (string memory tu,string memory i) = getTokenURI(n,d,ct); 
        c.image_url = i;
        c.tokenuri = tu;
         _tokenURI = tu;
        card.push(c);
        tokeninfo[newNftTokenId] = c;
  
        _safeMint(_address,newNftTokenId) ;
        _setTokenURI(newNftTokenId,_tokenURI);
    }
    
    
    function getTokenURI(string memory _name, string memory _desc, string memory _ct) internal view returns ( string memory , string memory ){
        //Use the name, description and category in db to create token uri 
        
        //Return the token uri and image url
        string memory _uri = "This is token URI";
        string memory _imageurl ="image url";
        return (_uri,_imageurl);
    } 
    
    function _safeMint(address to, uint256 tokenId) internal override onlyOwner  {
        _safeMint(to, tokenId, "");
    }
    
    function viewCategory(uint _tokenid) public view returns (string memory) {
        return (tokeninfo[_tokenid].cat);
    }
    
    function viewNumberofCards() public view returns (uint) {
        return _tokenIds.current();
    }
    
    function viewName(uint _tokenid) public view returns (string memory){
        return (tokeninfo[_tokenid].name);
    }
    
    function viewDescription(uint _tokenid) public view returns (string memory){
        return (tokeninfo[_tokenid].description);
    }
    
    function viewImageUrl(uint _tokenid) public view returns (string memory){
        return (tokeninfo[_tokenid].image_url);
    }
    
    function viewtokenURI(uint _tokenid) public view returns (string memory){
        return (tokeninfo[_tokenid].image_url);
    }
    
     function totalSupply() public view override returns (uint256) {
        return _tokenIds.current();
    }
    
    
}
