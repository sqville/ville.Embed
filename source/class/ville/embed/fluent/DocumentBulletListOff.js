/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentBulletListOff",
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

   var pathdregular = "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-1.25-1.24A2 2 0 0 1 14 18H6a2 2 0 0 1-2-2V4.7Zm11 11-1.03-1.02a.5.5 0 0 1-.47.32h-5a.5.5 0 0 1 0-1h4.8l-1-1H8.5a.5.5 0 0 1 0-1h2.8l-1-1H8.5a.5.5 0 0 1 0-1h.8L5 5.7V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.3ZM12.12 10l1 1h.38a.5.5 0 0 0 0-1h-1.38ZM15 8v4.88l1 1V7.4c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-1.35.53l.7.7A1 1 0 0 1 6 3h4v3.5c0 .83.67 1.5 1.5 1.5H15Zm-9 2.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm.5 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM6 14.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM14.8 7h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Z";
   var pathdfilled = "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-1.16-1.16A1.5 1.5 0 0 1 14.5 18h-9A1.5 1.5 0 0 1 4 16.5V4.7Zm9.3 9.3H8.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .47-.32l-.68-.68Zm-1-1-1-1H8.5a.5.5 0 0 0 0 1h3.8Zm-2-2-1-1h-.8a.5.5 0 0 0 0 1h1.8Zm3.2 0h-.38L16 13.88V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5c-.38 0-.73.14-1 .38L12.12 10h1.38a.5.5 0 0 1 0 1ZM6 10.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 2a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm0 2a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm5-8V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z";
   
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