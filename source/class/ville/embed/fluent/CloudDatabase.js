/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudDatabase",
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

   var pathdregular = "M10 3c2.82 0 4.41 1.92 4.65 4.25h.07a3.3 3.3 0 0 1 3.18 2.54 5.64 5.64 0 0 0-1.32-.54c-.41-.6-1.1-1-1.86-1h-.07a1 1 0 0 1-1-.9C13.45 5.32 12.11 4 10 4S6.55 5.32 6.35 7.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 10.62 2.33 2.33 0 0 0 5.28 13H10v1H5.28A3.33 3.33 0 0 1 2 10.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 4.9 7.18 3 10 3Zm7.47 11.28c-.8.47-1.86.72-2.97.72-1.1 0-2.16-.25-2.97-.72-.18-.1-.36-.22-.53-.36V17c0 1.1 1.57 2 3.5 2s3.5-.9 3.5-2v-3.08c-.17.14-.35.26-.53.36ZM14.5 10c-1.93 0-3.5.9-3.5 2s1.57 2 3.5 2 3.5-.9 3.5-2-1.57-2-3.5-2Z";
   var pathdfilled = "M10 3c2.82 0 4.41 1.92 4.65 4.25h.07a3.3 3.3 0 0 1 3.18 2.54c-.17-.1-.35-.2-.53-.27A7.47 7.47 0 0 0 14.5 9c-1.07 0-2.08.18-2.87.52-.39.17-.77.4-1.07.7-.3.3-.56.73-.56 1.28V14H5.28A3.33 3.33 0 0 1 2 10.62a3.33 3.33 0 0 1 3.28-3.37h.07C5.6 4.9 7.18 3 10 3Zm7.47 11.28c-.8.47-1.86.72-2.97.72-1.1 0-2.16-.25-2.97-.72-.18-.1-.36-.22-.53-.36V17c0 1.1 1.57 2 3.5 2s3.5-.9 3.5-2v-3.08c-.17.14-.35.26-.53.36ZM14.5 10c-1.93 0-3.5.9-3.5 2s1.57 2 3.5 2 3.5-.9 3.5-2-1.57-2-3.5-2Z";
   
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