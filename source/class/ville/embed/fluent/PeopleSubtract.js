/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleSubtract",
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

   var pathdregular = "M6.75 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0 4.25a2 2 0 0 0-1.99 2.26 3.95 3.95 0 0 0 .67 1.8C2.88 15.09 4.24 16 6.75 16c.95 0 1.73-.13 2.37-.35A5.51 5.51 0 0 1 9 14.63c-.56.22-1.3.37-2.25.37-2.24 0-3.26-.8-3.74-1.5A2.95 2.95 0 0 1 2.5 12a1 1 0 0 1 1-1H10a1 1 0 0 1 .23.03c.23-.28.49-.54.76-.77A2 2 0 0 0 10 10H3.5Zm11-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM12 14.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M10 5.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM11 10.26a5.49 5.49 0 0 0-1.88 5.4c-.64.2-1.42.34-2.37.34-5.25 0-5.25-4-5.25-4 0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM12 14.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   
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