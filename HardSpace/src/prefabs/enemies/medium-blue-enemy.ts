﻿import { BaseBlueEnemy } from "./base-blue-enemy.js";

export class MediumBlueEnemy extends BaseBlueEnemy {
	constructor(
		game: Phaser.Game,
		x: number,
		y: number,
		vx: number,
		vy: number,
		health: number,
		armor: number
	) {
		super(game, "blueMediumEnemyFly", x, y, vx, vy, health, armor);
	}
}