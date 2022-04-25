import { DeployPoolCall } from "../generated/PoolDeployer/PoolDeployer"
import { PoolDeployerEntity } from "../generated/schema"

export function handleDeployPool(call: DeployPoolCall): void {
  let id = call.transaction.hash.toHex();
  let poolDeployer = PoolDeployerEntity.load(id);

  if (!poolDeployer) {
    poolDeployer = PoolDeployerEntity.load(call.inputs.operator.toHex());
  }

  if (!poolDeployer) {
    poolDeployer = new PoolDeployerEntity(call.inputs.operator.toHex());
  }

  poolDeployer.save();
}
