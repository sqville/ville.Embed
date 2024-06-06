/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleError",
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

   var pathdregular = "M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26c-.28.23-.54.49-.77.77A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM13 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   var pathdfilled = "M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 0 0-1-.26H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 0 1 9 14.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   
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