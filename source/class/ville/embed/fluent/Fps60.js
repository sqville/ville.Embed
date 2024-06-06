/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Fps60",
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

   var pathdregular = "M12.5 2A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm0 7A1.5 1.5 0 0 1 11 7.5v-3a1.5 1.5 0 0 1 3 0v3c0 .83-.67 1.5-1.5 1.5Zm-9 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 0 1-1 0v-.01a.49.49 0 0 0-.49-.49h-.76a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 0 1 1 0v.01c0 .27.22.49.49.49h.76a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75ZM4 4.5v3a2.5 2.5 0 1 0 1-2v-1a1.5 1.5 0 1 1 3 0 .5.5 0 0 0 1 0 2.5 2.5 0 0 0-5 0ZM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z";
   var pathdfilled = "M6.5 2A2.5 2.5 0 0 0 4 4.5v3A2.5 2.5 0 1 0 6.5 5h-.1c-.32 0-.62.06-.9.17V4.5a1 1 0 0 1 1-1h.25c.41 0 .75.34.75.75a.75.75 0 0 0 1.5 0C9 3.01 8 2 6.75 2H6.5Zm-1 5.5v-.1c0-.5.4-.9.9-.9h.1a1 1 0 1 1-1 1Zm6-3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm1-2.5A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm-9 10a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.75c.83 0 1.5.67 1.5 1.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.75a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 1 1 0c0 .28.22.5.5.5h.75a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75Z";
   
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