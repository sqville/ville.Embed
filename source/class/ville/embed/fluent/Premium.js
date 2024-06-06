/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Premium",
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

   var pathdregular = "M5.5 3a.5.5 0 0 0-.43.24l-3 5a.5.5 0 0 0 .05.58l7.5 9a.5.5 0 0 0 .76 0l7.5-9a.5.5 0 0 0 .05-.58l-3-5A.5.5 0 0 0 14.5 3h-9ZM3.38 8l2.4-4h1.98l-1.6 4H3.38Zm2.78 1 2.26 5.83L3.57 9h2.59ZM10 16.12 7.23 9h5.54L10 16.12ZM7.24 8l1.6-4h2.32l1.6 4H7.24Zm6.6 0-1.6-4h1.98l2.4 4h-2.78Zm0 1h2.6l-4.86 5.83L13.84 9Z";
   var pathdfilled = "M5.5 2.75a.75.75 0 0 0-.66.39l-2.75 5c-.15.27-.11.6.08.84l7.25 8.75a.75.75 0 0 0 1.16 0l7.25-8.75c.2-.24.23-.57.08-.84l-2.75-5a.75.75 0 0 0-.66-.39h-9ZM4.16 7.5l1.78-3.25h1.5L6.31 7.5H4.16ZM6.14 9l1.93 4.75L4.14 9h2ZM10 14.48 7.76 9h4.39l-2.16 5.48ZM7.89 7.5l1.14-3.25h1.95l1.2 3.25H7.88Zm5.88 0-1.2-3.25h1.49l1.78 3.25h-2.07Zm0 1.5h2.1l-4.01 4.83L13.76 9Z";
   
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