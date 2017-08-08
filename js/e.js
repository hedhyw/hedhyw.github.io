"use strict"

function e(expr, parent=document) {
  if (expr.startsWith("#")) {
    return document.getElementById(expr.substring(1));
  } else if (expr.startsWith(".")) {
    return parent.getElementsByClassName(expr.substring(1));
  } else if (expr.startsWith("+")) {
    return parent.createElement(expr.substring(1));
  } else {
    return parent.getElementsByTagName(expr.substring(1));
  }
}
