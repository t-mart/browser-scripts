# t-mart's Broswer Script Collection

This repository will store browser scripts I load with
[Violentmonkey](https://violentmonkey.github.io/).

## Importing these scripts to Violentmonkey

- Method #1:

  This method is nice because it also imports Violentmonkey settings, in addition to the scripts
  themselves.

  1. Zip this repository up into a `.zip` file. For structuring, the archive should be flat. For
     example, this README (and all other scripts) should be at the root level of the archive.

     [git-archive](https://git-scm.com/docs/git-archive) can assist with this:

     ```shell
     git archive --format=zip --output scripts.zip HEAD
     ```

  2. Navigate to the Violentmonkey settings (click Violentmonkey icon in browser's extension
     toolbar, then click gear icon).

  3. In the _Data Import_ section, click _Import from zip_, and select the zip archive from earlier.

- Method #2:

  Just copy paste scripts from here as new scripts.

## Exporting loaded violentmonkey scripts to this repository

1. Navigate to the Violentmonkey settings (click Violentmonkey icon in browser's extension toolbar,
   then click gear icon).

2. In the _Data Export_ section and click _Export from zip_. A zip archive download will be
   triggered.

3. Copy the files from that archive into this repository, overwriting anything with the newest
   versions.

4. Commit and push this repository.
