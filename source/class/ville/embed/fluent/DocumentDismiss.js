/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentDismiss",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM8.67 17.68a4.5 4.5 0 1 0-6.36-6.36 4.5 4.5 0 0 0 6.36 6.36Zm-4.95-4.95c.2-.2.51-.2.7 0L5.5 13.8l1.06-1.06a.5.5 0 1 1 .7.7L6.22 14.5l1.06 1.06a.5.5 0 1 1-.71.7L5.5 15.22l-1.06 1.06a.5.5 0 1 1-.7-.71l1.05-1.06-1.06-1.06a.5.5 0 0 1 0-.7Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 0 0 4 9.2V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM2.32 17.68a4.5 4.5 0 1 0 6.36-6.36 4.5 4.5 0 0 0-6.36 6.36Zm1.41-4.95c.2-.2.51-.2.7 0L5.5 13.8l1.06-1.06a.5.5 0 1 1 .7.7L6.22 14.5l1.06 1.06a.5.5 0 1 1-.71.7L5.5 15.22l-1.06 1.06a.5.5 0 1 1-.7-.71l1.05-1.06-1.06-1.06a.5.5 0 0 1 0-.7Z";
   
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