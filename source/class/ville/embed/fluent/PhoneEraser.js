/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneEraser",
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

   var pathdregular = "M14.58 1.44a1.5 1.5 0 0 1 2.12 0l1.86 1.86a1.5 1.5 0 0 1 0 2.12l-5.14 5.14a1.5 1.5 0 0 1-2.12 0L9.44 8.7a1.5 1.5 0 0 1 0-2.12l5.14-5.14Zm-4.43 5.84a.5.5 0 0 0 0 .71L12 9.85c.2.2.51.2.7 0l1.3-1.29L11.44 6l-1.3 1.3Zm2.38-5.2A2 2 0 0 0 12 2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-4.61c-.3.26-.64.43-1 .53V16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5.6l.93-.93ZM7.5 14.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M14.58 1.44a1.5 1.5 0 0 1 2.12 0l1.86 1.86a1.5 1.5 0 0 1 0 2.12l-5.14 5.14a1.5 1.5 0 0 1-2.12 0L9.44 8.7a1.5 1.5 0 0 1 0-2.12l5.14-5.14Zm-4.43 5.84a.5.5 0 0 0 0 .71L12 9.85c.2.2.51.2.7 0l1.3-1.29L11.44 6l-1.3 1.3ZM12.6 2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-5.11a2.5 2.5 0 0 1-3.4-.12L8.72 9.4a2.5 2.5 0 0 1 0-3.54L12.6 2Zm-2.1 12.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1 0-1h2c.28 0 .5.22.5.5Z";
   
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