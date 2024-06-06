/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableDeleteRow",
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

   var pathdregular = "M16.5 2c.28 0 .5.22.5.5V4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 1 0V4a1 1 0 0 0 1 1h2V2.5a.5.5 0 0 1 1 0V5h4V2.5a.5.5 0 0 1 1 0V5h2a1 1 0 0 0 1-1V2.5c0-.28.22-.5.5-.5Zm0 16a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0V16a1 1 0 0 1 1-1h2v2.5a.5.5 0 0 0 1 0V15h4v2.5a.5.5 0 0 0 1 0V15h2a1 1 0 0 1 1 1v1.5c0 .28.22.5.5.5Zm1-7.5a.5.5 0 0 0 0-1h-4.89a5 5 0 0 1-.48.5l.14.13c.12.12.25.24.35.37h4.88Zm-15-1h4.89a5 5 0 0 0 .34.35l.14.14-.14.14c-.12.12-.25.24-.35.37H2.5a.5.5 0 0 1 0-1Zm9.35 2.35a.5.5 0 0 0 0-.7L10.71 10l1.14-1.15a.5.5 0 0 0-.7-.7L10 9.29 8.85 8.15a.5.5 0 1 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 0 0 .7.7L10 10.71l1.15 1.14c.2.2.5.2.7 0Z";
   var pathdfilled = "M12 6H8V2h4v4ZM3.5 2H7v4H5a2 2 0 0 1-2-2V2.5c0-.28.22-.5.5-.5ZM15 6h-2V2h3.5c.28 0 .5.22.5.5V4a2 2 0 0 1-2 2Zm1.5 12a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2h-2v4h3.5ZM12 18v-4H8v4h4Zm-5 0H3.5a.5.5 0 0 1-.5-.5V16c0-1.1.9-2 2-2h2v4Zm10.5-7.5a.5.5 0 0 0 0-1h-4.89a5 5 0 0 1-.48.5l.14.13c.12.12.25.24.35.37h4.88Zm-15-1h4.89a5 5 0 0 0 .34.35l.14.14-.14.14c-.12.12-.25.24-.35.37H2.5a.5.5 0 0 1 0-1Zm9.35 2.35a.5.5 0 0 0 0-.7L10.71 10l1.14-1.15a.5.5 0 0 0-.7-.7L10 9.29 8.85 8.15a.5.5 0 1 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 0 0 .7.7L10 10.71l1.15 1.14c.2.2.5.2.7 0Z";
   
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