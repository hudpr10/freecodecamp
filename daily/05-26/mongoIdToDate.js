/*
Mongo ID Date

Given a MongoDB ID string, return its creation time as an ISO 8601 string.

  - A MongoDB ID is a 24-character hex string. The first 8 characters represent a Unix timestamp (in seconds) encoded as a base-16 integer.
  - For example, "6a094b50bcf86cd799439011" has a timestamp of "6a094b50" in hex, which is 1778994000 in decimal, representing a creation time of "2026-05-17T05:00:00.000Z".
*/

function mongoIdToDate(id) {
  const hex = id.substring(0, 8);
  const dec = parseInt(hex, 16);
  
  return new Date(dec * 1000).toISOString();
}

mongoIdToDate("6a094b50bcf86cd799439011");
// return: '2026-05-17T05:00:00.000Z'

mongoIdToDate("69f571c3d7711807afd3dd55");
// return: '2026-05-02T03:38:43.000Z'
