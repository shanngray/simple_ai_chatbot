# SECURITY STATUS: INACTIVE (classified 2026-11-09)

On 2026-11-09, Shannon Gray classified this repository as **inactive** for his
own work. This is Shannon Gray's classification of his own use of the project.
It is not an independent assessment of whether the code is maintained.

It **has known, unfixed security vulnerabilities** in its dependencies. Dated
inventory evidence generated 2026-11-09T07:12:20+11:00 (OSV, GitHub Advisory
Database via OSV, and CISA KEV) recorded 140 open advisories against this
repository's default branch: 7 critical, 64 high, 59 medium, and 10 low. That
inventory lists no CISA Known Exploited Vulnerabilities catalog entries. This
notice does not report a new scan.

Most serious (up to 5):

- lodash 4.17.11 (npm): GHSA-jf85-cpcp-j695 / CVE-2019-10744, severity critical;
  fixed in 4.17.12
- lodash 4.17.5 (npm): GHSA-jf85-cpcp-j695 / CVE-2019-10744, severity critical;
  fixed in 4.17.12
- next 14.2.11 (npm): GHSA-f82v-jwr5-mffw / CVE-2025-29927, severity critical;
  fixed in 13.5.9, 14.2.25, 15.2.3, 12.3.5
- proxy-addr 2.0.7 (npm): GHSA-jqcg-44mw-7w3h / CVE-2026-90711, severity
  critical; fixed in 2.0.8
- next 14.2.11 (npm): GHSA-p293-qw3h-jr36 / CVE-2026-75604, severity critical;
  fixed in 15.5.24, 16.3.3

## Retained findings

Known findings for this repository are kept on record and are not deleted while
it is inactive.

## Before work resumes

1. Review the recorded findings and re-scan for newer advisories.
2. Remediate: update affected dependencies to fixed versions.
3. Test the project after the updates.
4. Then update or remove this file.

## Alerts while inactive

While this repository is inactive, Shannon gets a security alert only for
**confirmed active exploitation**: a listing in the CISA Known Exploited
Vulnerabilities catalog, OR reliable evidence of in-the-wild exploitation from
another source (with source, URL, and date). A public proof-of-concept or
exploit code alone is not enough. Other advisories are kept on record without
an alert.

## About this file

This file is a notice only. Placing it here does not guarantee that every
person or tool reading the repository will see it. It does not replace or
change any security policy. This repository has no SECURITY.md and no other
security policy file, so this notice does not link to one.
