/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ResizeImage",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M5 2a3 3 0 0 0-3 3v3.5a.5.5 0 0 0 1 0V5c0-1.1.9-2 2-2h3.5a.5.5 0 0 0 0-1H5Zm6.5 0a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5Zm6.5 9.5a.5.5 0 0 0-1 0V15a2 2 0 0 1-2 2h-3.5a.5.5 0 0 0 0 1H15a3 3 0 0 0 3-3v-3.5Zm-17 1A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0L1.4 17.88C1.15 17.48 1 17 1 16.5v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0L2.12 18.6Z";
   var pathdfilled = "M5.25 2A3.25 3.25 0 0 0 2 5.25v3a.75.75 0 0 0 1.5 0v-3c0-.97.78-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3Zm6.5 0a.75.75 0 0 0 0 1.5h3c.97 0 1.75.78 1.75 1.75v3a.75.75 0 0 0 1.5 0v-3C18 3.45 16.54 2 14.75 2h-3ZM18 11.75a.75.75 0 0 0-1.5 0v3c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 0 0 0 1.5h3c1.8 0 3.25-1.46 3.25-3.25v-3ZM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0L1.4 17.88C1.15 17.48 1 17 1 16.5v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.51 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0L2.12 18.6Z";
   
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