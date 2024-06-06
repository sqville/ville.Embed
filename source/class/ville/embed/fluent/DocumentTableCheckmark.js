/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentTableCheckmark",
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

   var pathdregular = "M7.5 9c-.24 0-.47.06-.68.16.82.2 1.56.58 2.18 1.1V10h3.5c.28 0 .5.22.5.5V12h-2.6c.16.32.3.65.4 1H13v1.5a.5.5 0 0 1-.5.5h-1.52c-.03.34-.1.68-.19 1h1.71c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5ZM4 9.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-2 2v5.2ZM14.8 7h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 15.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   var pathdfilled = "M9 10.26A5.52 5.52 0 0 1 10.4 12H13v-1.5a.5.5 0 0 0-.5-.5H9v.26ZM13 13h-2.2a5.5 5.5 0 0 1 .18 2h1.52a.5.5 0 0 0 .5-.5V13ZM5.5 9c.46 0 .9.06 1.32.16.2-.1.44-.16.68-.16h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-1.7a5.49 5.49 0 0 1-1.06 2h4.76c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7c.48-.13.98-.2 1.5-.2ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-1 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 15.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   
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