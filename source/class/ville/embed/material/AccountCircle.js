/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.material.AccountCircle",
{
  extend : ville.embed.material.Abstract,

  construct (iconstyle)
  {
   super();

   if (iconstyle != null)
     this.setIconStyle(iconstyle);

   var pathdregular = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z";
   var pathdfilled = "m11.68 5.16-.38.33c-.23.21-.48.38-.74.46L4.76 7.9l-.6-1.23a1.19 1.19 0 0 0-.24-.34c-.62-.6-1.74-.27-1.9.62L2 7.16v2.99c0 1.2 1.18 2.04 2.32 1.65l3.02-1.04-.3 1.46c-.3 1.56 1.7 2.47 2.66 1.21l3.1-4 4.18-1.35c.84-.27 1.33-1.28.74-2.1-.52-.7-1.43-1.68-2.67-1.92a2.98 2.98 0 0 0-.88-.04 4.9 4.9 0 0 0-2.5 1.14Zm-2.57.22L5.38 6.62l-.04-.05a1.6 1.6 0 0 1 2.17-2.29l1.6 1.1ZM2.5 17a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});