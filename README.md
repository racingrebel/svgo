# This is a fork of the original SVGO library used for creating basic web icons.

This fork is designed to strip down SVGs down to fundimental paths and shapes without relying on groups and defs. This fork contains a flattenDefs plugin. It allows SVGs that include their paths and shapes in defs to be pulled out of the <defs> tag and then removes the <defs> tag. IDs inside of the children of <defs> are also removed in the process.
