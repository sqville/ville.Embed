/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GlobeError",
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

   var pathdregular = "M10 18h.25a5.5 5.5 0 0 1-.7-1.09c-.53-.2-1.1-.79-1.57-1.82-.22-.46-.4-1-.56-1.59h1.67c.06-.35.16-.68.28-1H7.21a14.87 14.87 0 0 1 0-5h5.58c.1.54.16 1.11.19 1.71.32-.09.65-.15 1-.18-.04-.53-.1-1.04-.17-1.53h2.73c.25.66.4 1.36.45 2.1.36.18.7.4 1 .65L18 10a8 8 0 1 0-8 8Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   var pathdfilled = "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76c.06.5.1 1 .13 1.52A5.57 5.57 0 0 1 18 10.25a7.93 7.93 0 0 0-.4-2.75Zm-4.77 0a19 19 0 0 1 .14 1.71 5.51 5.51 0 0 0-3.6 3.29H7.15a19.44 19.44 0 0 1 0-5h5.68Zm-5.52 6h1.77a5.53 5.53 0 0 0 1.14 4.47.99.99 0 0 1-.23.03c-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32Zm.57 4.22A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5Zm16.61 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   
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