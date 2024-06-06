/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CameraEdit",
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

   var pathdregular = "M6.78 2.83c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.08.32 1.34.83L13.8 4h1.7A2.5 2.5 0 0 1 18 6.5v2.2c-.3-.26-.65-.45-1-.56V6.5c0-.83-.68-1.5-1.5-1.5h-2a.5.5 0 0 1-.45-.28l-.73-1.44A.5.5 0 0 0 11.9 3H8.12a.5.5 0 0 0-.44.28l-.73 1.44A.5.5 0 0 1 6.5 5h-2C3.68 5 3 5.67 3 6.5v8c0 .83.68 1.5 1.5 1.5h3.72l-.16.65L8 17H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.7l.58-1.17Zm7.1 6.23a4 4 0 1 0-4.8 4.83c.05-.08.12-.15.2-.22l.66-.67A3 3 0 1 1 13 9.94l.89-.88Zm.93.49-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   var pathdfilled = "M8.12 2a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17H8l.06-.35.37-1.5c.12-.46.34-.9.64-1.26a4 4 0 1 1 4.82-4.83l.21-.22A2.87 2.87 0 0 1 18 8.7V6.5A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.16A1.5 1.5 0 0 0 11.89 2H8.12ZM13 9.94A3 3 0 1 0 9.94 13L13 9.94Zm1.8-.4-4.82 4.84a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   
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