import { ethers } from "hardhat"
import { BytesLike, ContractFactory } from "ethers"

export async function getFactory({
  abi,
  bytecode,
}: {
  abi: any[]
  bytecode: BytesLike
}): Promise<ContractFactory> {
  return await ethers.getContractFactory(abi, bytecode)
}
export async function mineBlock(provider: any, timestamp: number): Promise<void> {
  await provider.send('evm_mine', timestamp)
}