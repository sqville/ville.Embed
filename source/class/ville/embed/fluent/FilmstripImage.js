/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FilmstripImage",
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

   var pathdregular = "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V7h-1V4.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5v6c0 .83.67 1.5 1.5 1.5H7v1H4.5A2.5 2.5 0 0 1 2 10.5v-6ZM16 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-8-.5A2.5 2.5 0 0 1 10.5 8h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 8 15.5v-5ZM10.5 9C9.67 9 9 9.67 9 10.5v5c0 .23.05.45.15.65l2.64-2.65a1.71 1.71 0 0 1 2.42 0l2.64 2.65c.1-.2.15-.42.15-.65v-5c0-.83-.67-1.5-1.5-1.5h-5Zm2 5.2-2.65 2.65c.2.1.42.15.65.15h5c.23 0 .45-.05.65-.15l-2.65-2.64a.71.71 0 0 0-1 0ZM4.5 4c.28 0 .5.22.5.5V5a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5Zm7.5.5a.5.5 0 0 0-1 0V5a.5.5 0 0 0 1 0v-.5ZM4.5 6.75c.28 0 .5.22.5.5v.5a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM5 10a.5.5 0 0 0-1 0v.5a.5.5 0 0 0 1 0V10Z";
   var pathdfilled = "M4.5 2A2.5 2.5 0 0 0 2 4.5v6A2.5 2.5 0 0 0 4.5 13H7v-2.5A3.5 3.5 0 0 1 10.5 7H14V4.5A2.5 2.5 0 0 0 11.5 2h-7Zm0 2c.28 0 .5.22.5.5V5a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5Zm7.5.5V5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 1 0ZM4.5 6.75c.28 0 .5.22.5.5v.5a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM5 10v.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 1 0Zm3 .5A2.5 2.5 0 0 1 10.5 8h5a2.5 2.5 0 0 1 2.5 2.5v5c0 .51-.15.98-.41 1.38L14.2 13.5a1.71 1.71 0 0 0-2.42 0l-3.38 3.38C8.15 16.48 8 16 8 15.5v-5Zm6 .5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-4.88 6.59c.4.26.87.41 1.38.41h5c.5 0 .98-.15 1.38-.41L13.5 14.2a.71.71 0 0 0-1 0l-3.38 3.38Z";
   
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