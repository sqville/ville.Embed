/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentTableSearch",
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

   var pathdregular = "M6.44 9.44A1.5 1.5 0 0 1 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H9.12l-.56-.56c.28-.59.44-1.25.44-1.94V15h3.5a.5.5 0 0 0 .5-.5V13H9v.5c0-1.07-.37-2.06-1-2.83V10h-.5a.5.5 0 0 0-.15.02 4.5 4.5 0 0 0-.91-.58ZM13 10.5a.5.5 0 0 0-.5-.5H9v2h4v-1.5ZM5 9.03a4.55 4.55 0 0 0-1 0V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-3.09a1.5 1.5 0 0 0-.35-.56l-.44-.44H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.03ZM11.5 7h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm-4.2 8.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6ZM7 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z";
   var pathdfilled = "M9 15h3.5a.5.5 0 0 0 .5-.5V13H9v2Zm.12 1 1.44 1.44c.16.16.28.36.35.56h3.59c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.53a4.55 4.55 0 0 1 2.44.4A1.5 1.5 0 0 1 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H9.12ZM13 12v-1.5a.5.5 0 0 0-.5-.5H9v2h4Zm-2-9.75V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM7.3 15.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6ZM7 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z";
   
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