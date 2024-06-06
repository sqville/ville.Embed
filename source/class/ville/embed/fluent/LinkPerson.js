/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LinkPerson",
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

   var pathdregular = "M8.5 4.5A.5.5 0 0 0 8 4H5.78A4 4 0 0 0 6 12h2.09A.5.5 0 0 0 8 11H5.8A3 3 0 0 1 6 5h2.09a.5.5 0 0 0 .41-.5ZM18 8a4 4 0 0 0-4-4h-2.09A.5.5 0 0 0 12 5h2.2a3 3 0 0 1 2.26 4.72c.26.23.48.5.65.8.56-.69.89-1.57.89-2.52Zm-4-.5H5.91a.5.5 0 0 0 .09 1h8.09a.5.5 0 0 0-.09-1Zm2.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S11 17.75 11 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   var pathdfilled = "M18 8a4 4 0 0 0-4-4h-2.1a.75.75 0 0 0 .1 1.5h2.16a2.5 2.5 0 0 1 1.89 3.93c.44.27.8.64 1.06 1.09.56-.69.89-1.57.89-2.52ZM8.75 4.75A.75.75 0 0 0 8 4H5.8a4 4 0 0 0 .2 8h2.1a.75.75 0 0 0-.1-1.5H5.84a2.5 2.5 0 0 1 .16-5h2.1a.75.75 0 0 0 .65-.75Zm5 2.5h-7.6a.75.75 0 0 0 .1 1.5h7.6a.75.75 0 0 0-.1-1.5ZM16.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S11 17.75 11 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   
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