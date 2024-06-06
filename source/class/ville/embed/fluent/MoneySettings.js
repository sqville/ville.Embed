/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MoneySettings",
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

   var pathdregular = "M7 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h5.52c.03-.34.1-.68.19-1H6v-1a2 2 0 0 0-2-2H3V8h1a2 2 0 0 0 2-2V5h6v1c0 1.1.9 2 2 2h1v1.02c.34.03.68.1 1 .19V5.5c0-.83-.67-1.5-1.5-1.5h-11ZM3 5.5c0-.28.22-.5.5-.5H5v1a1 1 0 0 1-1 1H3V5.5ZM13 5h1.5c.28 0 .5.22.5.5V7h-1a1 1 0 0 1-1-1V5Zm-8 8H3.5a.5.5 0 0 1-.5-.5V11h1a1 1 0 0 1 1 1v1Zm-.91 2h4.93c.03.34.1.68.19 1H5.5a1.5 1.5 0 0 1-1.41-1ZM18 7.5v2.76a5.5 5.5 0 0 0-1-.66V6.09c.58.2 1 .76 1 1.41Zm-5.94 3.94a2 2 0 0 1-1.43 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.02l.35.08A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   var pathdfilled = "M3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h5.52A5.5 5.5 0 0 1 16 9.2V5.5c0-.83-.67-1.5-1.5-1.5h-11ZM6 6a2 2 0 0 1-2 2H3V7h1a1 1 0 0 0 1-1V5h1v1Zm3 4.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM3 11v-1h1a2 2 0 0 1 2 2v1H5v-1a1 1 0 0 0-1-1H3Zm10-5a1 1 0 0 0 1 1h1v1h-1a2 2 0 0 1-2-2V5h1v1Zm-8.91 9h4.93c.03.34.1.68.19 1H5.5a1.5 1.5 0 0 1-1.41-1ZM18 7.5v2.76a5.5 5.5 0 0 0-1-.66V6.09c.58.2 1 .76 1 1.41Zm-5.94 3.94a2 2 0 0 1-1.43 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.02l.35.08A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   
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