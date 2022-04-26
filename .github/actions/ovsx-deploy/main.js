/*
 * Copyright (C) 2022 jblievremont
 */

import * as fs from 'fs';

const ovsxToken = process.env['OPENVSX_TOKEN'];
const artifactName = process.env['ARTIFACT_NAME']

console.info(`Should deploy ${artifactName}`);

const artifactStats = fs.statSync(artifactName);

console.info(`${artifactName} is ${artifactStats.size} bytes in size`);
