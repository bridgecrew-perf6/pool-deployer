// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PoolDeployerEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("poolCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PoolDeployerEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PoolDeployerEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PoolDeployerEntity", id.toString(), this);
    }
  }

  static load(id: string): PoolDeployerEntity | null {
    return changetype<PoolDeployerEntity | null>(
      store.get("PoolDeployerEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolCount(): BigInt {
    let value = this.get("poolCount");
    return value!.toBigInt();
  }

  set poolCount(value: BigInt) {
    this.set("poolCount", Value.fromBigInt(value));
  }

  get allPools(): Array<Bytes> | null {
    let value = this.get("allPools");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set allPools(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("allPools");
    } else {
      this.set("allPools", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }
}