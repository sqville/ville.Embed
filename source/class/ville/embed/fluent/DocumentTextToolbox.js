/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentTextToolbox",
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

   var pathdregular = "M8.95 11c-.07-.37-.23-.7-.45-1h5a.5.5 0 0 1 0 1H8.95Zm1.55 1c.22.3.38.63.45 1h2.55a.5.5 0 0 0 0-1h-3Zm3 2H11v1h2.5a.5.5 0 0 0 0-1ZM5 4v5h-.5c-.17 0-.34.02-.5.05V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-3.05c.03-.16.05-.33.05-.5V17h3a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1Zm6.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5ZM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z";
   var pathdfilled = "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.55c.16-.03.33-.05.5-.05h2c.82 0 1.54.4 2 1h5a.5.5 0 0 1 0 1H8.95v.04a2.5 2.5 0 0 1 1.55.96h3a.5.5 0 0 1 0 1h-2.55c.03.16.05.33.05.5v.5h2.5a.5.5 0 0 1 0 1H11v2.5c0 .17-.02.34-.05.5h3.55c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3Zm4-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v.5h3v-.5ZM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z";
   
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