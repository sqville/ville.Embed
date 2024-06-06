/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentCss",
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

   var pathdregular = "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-.5c.22-.3.38-.63.45-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.76a3 3 0 0 0-1-.59V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5ZM3 12a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0 .5.5 0 0 0-1 0 1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0 .5.5 0 0 0 1 0 2 2 0 0 0-2-2Zm8.5 0c-.83 0-1.5.67-1.5 1.5v.38c0 .57.32 1.09.83 1.34l.9.45a.5.5 0 0 1 .27.45v.38a.5.5 0 0 1-1 0 .5.5 0 0 0-1 0 1.5 1.5 0 0 0 3 0v-.38a1.5 1.5 0 0 0-.83-1.34l-.9-.45a.5.5 0 0 1-.27-.45v-.38a.5.5 0 0 1 1 0 .5.5 0 0 0 1 0c0-.83-.67-1.5-1.5-1.5ZM6 13.5a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0v.38c0 .2.1.36.28.45l.9.45c.5.25.82.77.82 1.34v.38a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.38a.5.5 0 0 0-.28-.45l-.9-.45A1.5 1.5 0 0 1 6 13.88v-.38Z";
   var pathdfilled = "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v7.67a3 3 0 0 1 1.38 1A2.5 2.5 0 0 1 9.5 12a2.5 2.5 0 0 1 4.5 1.5c0 .44-.2.84-.5 1.12.32.42.5.95.5 1.5v.38c0 .56-.19 1.08-.5 1.5h1c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM3 12a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0 .5.5 0 0 0-1 0 1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0 .5.5 0 0 0 1 0 2 2 0 0 0-2-2Zm8.5 0c-.83 0-1.5.67-1.5 1.5v.38c0 .57.32 1.09.83 1.34l.9.45a.5.5 0 0 1 .27.45v.38a.5.5 0 0 1-1 0 .5.5 0 0 0-1 0 1.5 1.5 0 0 0 3 0v-.38a1.5 1.5 0 0 0-.83-1.34l-.9-.45a.5.5 0 0 1-.27-.45v-.38a.5.5 0 0 1 1 0 .5.5 0 0 0 1 0c0-.83-.67-1.5-1.5-1.5ZM6 13.5a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0v.38c0 .2.1.36.28.45l.9.45c.5.25.82.77.82 1.34v.38a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.38a.5.5 0 0 0-.28-.45l-.9-.45A1.5 1.5 0 0 1 6 13.88v-.38Z";
   
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