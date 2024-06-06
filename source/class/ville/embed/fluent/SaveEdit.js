/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SaveEdit",
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

   var pathdregular = "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3l.06-.35.16-.65H6v-4.5c0-.28.22-.5.5-.5h5.44l1-1H6.5c-.83 0-1.5.67-1.5 1.5V16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1v2.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V4h.38a1 1 0 0 1 .7.3l1.63 1.61a1 1 0 0 1 .29.71V8c.34-.01.68.03 1 .13v-1.5a2 2 0 0 0-.59-1.42L14.8 3.59A2 2 0 0 0 13.38 3H5Zm2 3.5V4h5v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5Zm7.8 3.05-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   var pathdfilled = "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2v-5.5c0-.83.67-1.5 1.5-1.5h6.44l1.16-1.16a2.87 2.87 0 0 1 2.9-.7V6.61a2 2 0 0 0-.59-1.41L14.8 3.59A2 2 0 0 0 13.38 3H13v3.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 6 6.5V3H5Zm6.94 8-2.67 2.67c-.4.41-.7.92-.84 1.49l-.37 1.5c-.03.11-.05.23-.06.34H6v-5.5c0-.28.22-.5.5-.5h5.44ZM7 3h5v3.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V3Zm7.8 6.55-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   
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