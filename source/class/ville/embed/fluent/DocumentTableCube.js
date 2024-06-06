/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentTableCube",
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

   var pathdregular = "M7.5 9c-.5 0-.96.25-1.23.64l.93.46a.5.5 0 0 1 .3-.1H8v.5l.9.45.1.05v-1h3.5c.28 0 .5.22.5.5V12H9.86a2 2 0 0 1 .14.74V13h3v1.5a.5.5 0 0 1-.5.5H10v1h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5Zm-3.4.45a2 2 0 0 1 .9-.21V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H9.94a2 2 0 0 1-.62 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.58 2H6a2 2 0 0 0-2 2v5.5l.1-.05ZM14.8 7h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM1.02 16.5v-3.76a1 1 0 0 1 .55-.9l3-1.5a1 1 0 0 1 .9 0l3 1.5a1 1 0 0 1 .55.9v3.77a1 1 0 0 1-.55.9l-3 1.5a1 1 0 0 1-.9 0l-3-1.5a1 1 0 0 1-.55-.9Zm1.04-3.57a.5.5 0 0 0 .27.66l2.2.92v2.62a.5.5 0 1 0 1 0V14.5l2.19-.92a.5.5 0 1 0-.4-.93l-2.3.98-2.3-.98a.5.5 0 0 0-.66.27Z";
   var pathdfilled = "M9.86 12A2 2 0 0 0 9 11v-1h3.5c.28 0 .5.22.5.5V12H9.86ZM13 13v1.5a.5.5 0 0 1-.5.5H10v-2h3ZM6.27 9.64l-.38-.2a2 2 0 0 0-1.79 0L4 9.5v-6C4 2.67 4.67 2 5.5 2H10v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.32a2 2 0 0 0 .68-1.5V16h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5c-.5 0-.96.25-1.23.64ZM11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM1.03 16.51v-3.77a1 1 0 0 1 .55-.9l3-1.5a1 1 0 0 1 .9 0l3 1.5a1 1 0 0 1 .55.9v3.77a1 1 0 0 1-.55.9l-3 1.5a1 1 0 0 1-.9 0l-3-1.5a1 1 0 0 1-.55-.9Zm1.04-3.58a.5.5 0 0 0 .27.66l2.2.92v2.62a.5.5 0 1 0 1 0V14.5l2.19-.92a.5.5 0 1 0-.4-.93l-2.3.98-2.3-.98a.5.5 0 0 0-.66.27Z";
   
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