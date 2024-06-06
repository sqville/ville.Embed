/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalligraphyPenError",
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

   var pathdregular = "M14.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM14 3.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm1.13 4a.62.62 0 1 1-1.25 0 .62.62 0 0 1 1.24 0Zm-.28 3.49a5.64 5.64 0 0 1-1.09-.04l-3.26 5.56v-5.64a1 1 0 1 0-1 0v5.64l-3.28-5.6a1.5 1.5 0 0 1-.07-1.4L7.82 6h1.2a5.57 5.57 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .1 2.33l3.47 5.91a1.37 1.37 0 0 0 2.36 0l3.47-5.9c.08-.14.14-.28.2-.43Z";
   var pathdfilled = "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Zm0 2.87.35-.01a2.5 2.5 0 0 1-.2.42l-3.47 5.91c-.15.27-.4.48-.68.59v-7.04a1 1 0 0 0 .46-1.16c.95.8 2.19 1.29 3.54 1.29ZM9 5.5c0 1.35.49 2.59 1.3 3.54a1 1 0 0 0-.8 1.83v7.04a1.37 1.37 0 0 1-.68-.59l-3.47-5.9a2.5 2.5 0 0 1-.1-2.34l1.23-2.6A1.75 1.75 0 0 1 5 4.75v-2a.75.75 0 0 1 1.5 0v2c0 .14.11.25.25.25h2.27L9 5.5Z";
   
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