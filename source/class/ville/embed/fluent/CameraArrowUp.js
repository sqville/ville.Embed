/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CameraArrowUp",
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

   var pathdregular = "M10 6a4 4 0 0 0-.97 7.88c.04-.33.11-.66.2-.98a3 3 0 1 1 3.67-3.66c.32-.1.64-.17.98-.2A4 4 0 0 0 10 6ZM4.5 16h4.7c.1.35.24.68.4 1H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.7l.58-1.17c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.08.32 1.34.83L13.8 4h1.7A2.5 2.5 0 0 1 18 6.5v3.76a5.5 5.5 0 0 0-1-.66V6.5c0-.83-.68-1.5-1.5-1.5h-2a.5.5 0 0 1-.45-.28l-.73-1.44A.5.5 0 0 0 11.9 3H8.12a.5.5 0 0 0-.44.28l-.73 1.44A.5.5 0 0 1 6.5 5h-2C3.68 5 3 5.67 3 6.5v8c0 .83.68 1.5 1.5 1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85-2.35-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 0 0 1 0v-2.8l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.14Z";
   var pathdfilled = "M7 10a3 3 0 0 1 5.9-.76 5.51 5.51 0 0 0-3.66 3.66A3 3 0 0 1 7 10Zm3-4a4 4 0 0 1 3.88 3.03A5.56 5.56 0 0 1 18 10.26V6.5A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h5.1a5.48 5.48 0 0 1-.57-3.12A4 4 0 0 1 10 6Zm9 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85-2.35-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 0 0 1 0v-2.8l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.14Z";
   
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