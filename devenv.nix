{ pkgs, lib, config, inputs, ... }:

{
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    yarn.enable = true;
  };
}
