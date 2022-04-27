import { log } from '@graphprotocol/graph-ts'

import { DeployPoolCall, DeployNewNftPool } from "../generated/PoolDeployer/PoolDeployer"
import { PoolDeployerEntity, NftPoolEntity } from "../generated/schema"

export function handleDeployPool(call: DeployPoolCall): void {
  let id = call.transaction.hash.toHex();
  let poolDeployer = PoolDeployerEntity.load(id);

  log.info('handleDeployPool call.transaction.hash id {}', [id.toString()]);

  log.info('handleDeployPool call.inputs.operator id {}', [call.inputs.operator.toHex().toString()]);

  if (!poolDeployer) {
    poolDeployer = PoolDeployerEntity.load(call.inputs.operator.toHex());
  }

  if (!poolDeployer) {
    poolDeployer = new PoolDeployerEntity(call.inputs.operator.toHex());
  }

  poolDeployer.save();
}

export function handleDeployNewNftPool(event: DeployNewNftPool): void {
  let id = event.params.nftPool.toHex();
  let pool = NftPoolEntity.load(id);

  log.info('handleDeployNewNftPool event.params.nftPool id {}', [id.toString()]);
  
  if (pool == null) {
    pool = new NftPoolEntity(id)
  }

  pool.save();

  let operator = pool.operator.toHex();
  let poolDeployer = PoolDeployerEntity.load(operator);

  log.info('handleDeployNewNftPool pool.operator {}', [operator.toString()]);

  if (!poolDeployer) {
    poolDeployer = new PoolDeployerEntity(operator);
  }

  poolDeployer.save()
}
