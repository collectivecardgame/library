#!/bin/bash

set -e

yarn run build

aws s3 sync --size-only --cache-control "max-age=0" build/library/ s3://www.collective.gg/library/
