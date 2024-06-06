/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentMultipleSync",
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

   var pathdregular = "M4 4c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14a2 2 0 0 1-2 2h-2.2c.08-.32.15-.66.18-1H13a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 9 6.5V3H6a1 1 0 0 0-1 1v5.02c-.34.03-.68.1-1 .19V4Zm6-.8v3.3c0 .28.22.5.5.5h3.3L10 3.2Zm.4 13.8c-.18.36-.4.7-.66 1h3.32A3.94 3.94 0 0 0 17 14.06V9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3h-2.6ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z";
   var pathdfilled = "M9 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7a5.5 5.5 0 0 1 6.8 6.8h2.7c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 9 6.5ZM13.06 18H9.74c.26-.3.48-.64.66-1H13a3 3 0 0 0 3-3V8a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18ZM10 6.5V2.25L14.75 7H10.5a.5.5 0 0 1-.5-.5Zm-9 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z";
   
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