/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleEdit",
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

   var pathdregular = "M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM10 10a2 2 0 0 1 2 1.94l-1.42 1.42a2.96 2.96 0 0 0 .42-1.28V12a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c1.56 0 2.53-.39 3.14-.86-.21.3-.37.65-.46 1.02l-.1.42a7.2 7.2 0 0 1-2.58.42c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12c0-1.1.9-2 2-2H10Zm7-3.5A2.49 2.49 0 0 1 14.5 9 2.5 2.5 0 1 1 17 6.5Zm-4 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm2.8 3.05-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   var pathdfilled = "M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM10 10a2 2 0 0 1 2 1.94l-1.73 1.73c-.4.41-.7.92-.84 1.49l-.1.42c-.68.26-1.52.42-2.58.42-5.25 0-5.25-4-5.25-4 0-1.1.9-2 2-2H10Zm7-3.5A2.49 2.49 0 0 1 14.5 9 2.5 2.5 0 1 1 17 6.5Zm-1.2 3.05-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   
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