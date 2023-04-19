const { expect } = require ('chai');
const { ethers } = require ('hardhat');

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe ('Token', () => {
	let token

	before(async() => {
	  //code goes here...
	  const Token = await ethers.getContractFactory('Token')
      token = await Token.deploy('Poo Bear', 'Poo', '1000000')
	})

	describe('Deployment', () => {
		const name = 'Poo Bear'
		const symbol = 'Poo'
		const decimals = '18'
		const totalSupply = tokens('1000000')

		//Tests go inside here...
	it('has correct name', async () => {
      
      expect(await token.name()).to.equal(name)
	})

	it('has correct symbol', async () => {
      expect(await token.symbol()).to.equal(symbol)
    })

	it('has correct decimals', async () => {
      expect(await token.decimals()).to.equal(decimals)
    })

    it('has correct totalSupply', async () => {
 	  expect(await token.totalSupply()).to.equal(totalSupply)
    })

	})
})


