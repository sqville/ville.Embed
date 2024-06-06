/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GlobeProhibited",
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

   var pathdregular = "M10.25 18H10a8 8 0 1 1 8-7.75 5.5 5.5 0 0 0-1.01-.66 6.97 6.97 0 0 0-.45-2.09h-2.73c.08.49.13 1 .16 1.53-.34.03-.67.1-.99.18-.03-.6-.1-1.17-.19-1.71H7.21a14.87 14.87 0 0 0 0 5h2.16c-.12.32-.22.65-.28 1H7.42c.15.59.34 1.13.56 1.6.48 1.02 1.04 1.6 1.58 1.81.19.4.42.76.7 1.09Zm1.77-13.1C11.41 3.6 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45ZM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 0 0 0 5h2.73C6.07 11.71 6 10.87 6 10Zm1.07 5.51c-.27-.59-.5-1.27-.68-2.01H3.94a7.02 7.02 0 0 0 3.77 3.12c-.24-.33-.45-.7-.64-1.1Zm9-9.01a7.02 7.02 0 0 0-3.78-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45Zm-6.07 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm2.4 2.8 4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.7-.7a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z";
   var pathdfilled = "M7.32 6.5c.17-.87.4-1.66.67-2.32.3-.73.65-1.3 1-1.66C9.36 2.15 9.7 2 10 2c.3 0 .65.15 1 .52.36.37.71.93 1.01 1.66.28.66.5 1.45.67 2.32H7.32Zm-.26-2.7c.24-.58.52-1.1.83-1.52A8.02 8.02 0 0 0 2.8 6.5h3.5c.18-1 .44-1.92.76-2.7Zm5.88 0a7.19 7.19 0 0 0-.83-1.52A8.02 8.02 0 0 1 17.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7Zm.91 3.7h3.75a8 8 0 0 1 .4 2.75 5.48 5.48 0 0 0-4.02-1.23c-.03-.52-.07-1.03-.13-1.52Zm-.87 1.71a19 19 0 0 0-.14-1.71H7.16a19.44 19.44 0 0 0 0 5h2.21a5.51 5.51 0 0 1 3.61-3.29ZM9.1 13.5H7.32c.17.87.4 1.66.67 2.32.3.73.65 1.3 1 1.66.36.37.7.52 1.01.52.08 0 .15 0 .23-.03A5.48 5.48 0 0 1 9.1 13.5Zm-6.29 0c1 2.05 2.85 3.6 5.1 4.22a7.19 7.19 0 0 1-.84-1.52c-.32-.78-.58-1.7-.76-2.7H2.8Zm3.35-1H2.4a8 8 0 0 1 0-5h3.75a20.52 20.52 0 0 0 0 5Zm3.85 2a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm2.4 2.8 4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.7-.7a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z";
   
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