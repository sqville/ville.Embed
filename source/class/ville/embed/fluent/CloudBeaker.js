/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudBeaker",
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

   var pathdregular = "M14.62 8c-.32-2.21-1.9-4-4.62-4-2.82 0-4.41 1.9-4.65 4.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h6.5l.52-1H5.28A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9C6.55 6.32 7.89 5 10 5c1.99 0 3.3 1.18 3.6 3h1.02ZM17 12.4a2 2 0 0 0 .22.92l.35.68h-4.14l.34-.67a2 2 0 0 0 .23-.92V10h-.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1H17v2.4ZM12.9 15l-.79 1.54A1 1 0 0 0 13 18h5a1 1 0 0 0 .88-1.46l-.8-1.54h-5.17Z";
   var pathdfilled = "M14.62 8c-.32-2.21-1.9-4-4.62-4-2.82 0-4.41 1.9-4.65 4.25h-.07A3.33 3.33 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h6.5l1.1-2.13a1 1 0 0 0 .12-.46v-1.5A1.5 1.5 0 0 1 13.5 8h1.12ZM17 12.4a2 2 0 0 0 .22.92l.35.68h-4.14l.34-.67a2 2 0 0 0 .23-.92V10h-.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1H17v2.4ZM12.9 15l-.79 1.54A1 1 0 0 0 13 18h5a1 1 0 0 0 .88-1.46l-.8-1.54h-5.17Z";
   
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