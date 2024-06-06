/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudFlow",
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

   var pathdregular = "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 9.76a3 3 0 0 0-1.04-.6 2.3 2.3 0 0 0-2.24-1.91h-.07a1 1 0 0 1-1-.9C13.45 4.32 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12h5.94a2.5 2.5 0 0 0-.37.7l-.1.3H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm6.93 8.23A2.01 2.01 0 0 1 18 12a2 2 0 0 1-3.73 1h-1.05a.5.5 0 0 0-.47.34l-.55 1.63A1.5 1.5 0 0 1 10.78 16H10a2 2 0 1 1-.27-1h1.05a.5.5 0 0 0 .47-.34l.55-1.63a1.94 1.94 0 0 1 .1-.22c.25-.5.76-.81 1.32-.81H14a2 2 0 0 1 2.93-1.77Zm-.44.9a1 1 0 0 0-1.49.86V12a1 1 0 0 0 2 .01V12a1 1 0 0 0-.51-.87ZM9 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z";
   var pathdfilled = "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 9.76 2.99 2.99 0 0 0 13.17 11a2.5 2.5 0 0 0-2.32 1.7l-.1.3H5.28A3.33 3.33 0 0 1 2 9.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 3.9 7.18 2 10 2Zm6 12a2 2 0 1 0-2-2h-.78a1.5 1.5 0 0 0-1.42 1.03l-.55 1.63a.5.5 0 0 1-.47.34H9.73a2 2 0 1 0 .27 1h.78a1.5 1.5 0 0 0 1.42-1.03l.55-1.63a.5.5 0 0 1 .47-.34h1.05c.34.6.99 1 1.73 1Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z";
   
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