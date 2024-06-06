/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CubeRotate",
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

   var pathdregular = "M8.95 3.53a2.5 2.5 0 0 1 2.1 0L15.7 5.7a.5.5 0 0 1 .29.45V8h1V6.14a1.5 1.5 0 0 0-.87-1.36l-4.66-2.15a3.5 3.5 0 0 0-2.94 0L3.87 4.78A1.5 1.5 0 0 0 3 6.14V8h1V6.14c0-.2.11-.37.29-.45l4.66-2.16ZM3.4 11a6.46 6.46 0 0 0 .76.54A11.4 11.4 0 0 0 10 13a11.4 11.4 0 0 0 6-1.56 6.46 6.46 0 0 0 1-.8c.2-.21.38-.42.52-.64H16a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0v-.98a6.2 6.2 0 0 1-1.64 1.37l-.36.21c-1.6.87-3.7 1.4-6 1.4a12.67 12.67 0 0 1-6.36-1.61A6.2 6.2 0 0 1 2 11.02V12a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H2.48a4.12 4.12 0 0 0 .92 1Zm.6 2.72v.14c0 .2.11.37.29.45l4.66 2.16c.67.3 1.43.3 2.1 0l4.66-2.16a.5.5 0 0 0 .29-.45v-.14a10 10 0 0 0 1-.55v.7a1.5 1.5 0 0 1-.87 1.35l-4.66 2.15c-.93.43-2 .43-2.94 0l-4.66-2.15A1.5 1.5 0 0 1 3 13.86v-.69c.31.2.65.39 1 .55ZM6.04 6.8a.5.5 0 0 1 .66-.26L10 7.96l3.3-1.42a.5.5 0 0 1 .4.92l-3.2 1.37V11a.5.5 0 1 1-1 0V8.83L6.3 7.46a.5.5 0 0 1-.26-.66Z";
   var pathdfilled = "M8.53 2.63c.93-.43 2-.43 2.94 0l4.66 2.15c.53.24.87.78.87 1.36V8h-1a1.5 1.5 0 0 0-.81 2.76A10.54 10.54 0 0 1 9.99 12c-2.1 0-3.92-.5-5.18-1.24A1.5 1.5 0 0 0 4 8H3V6.14c0-.58.34-1.12.87-1.36l4.66-2.15ZM6.7 6.54a.5.5 0 0 0-.4.92l3.2 1.37v1.67a.5.5 0 1 0 1 0V8.83l3.2-1.37a.5.5 0 1 0-.4-.92L10 7.96 6.7 6.54Zm8.8 2.96c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0v-.98a6.2 6.2 0 0 1-1.64 1.37A12.4 12.4 0 0 1 10 14a12.4 12.4 0 0 1-6.36-1.61A6.2 6.2 0 0 1 2 11.02V12a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H2.48a4.12 4.12 0 0 0 .92 1 6.57 6.57 0 0 0 .76.54c.4.25.87.47 1.37.67 1.27.5 2.8.8 4.47.8s3.2-.3 4.47-.8a8.67 8.67 0 0 0 2.13-1.2 5.24 5.24 0 0 0 .92-1H16a.5.5 0 0 1-.5-.5ZM10 15c-2.66 0-5.16-.67-7-1.83v.7c0 .58.34 1.1.87 1.35l4.66 2.15c.93.43 2 .43 2.94 0l4.66-2.15c.53-.24.87-.77.87-1.36v-.69A13.32 13.32 0 0 1 10 15Z";
   
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