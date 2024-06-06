/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Predictions",
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

   var pathdregular = "M14.5 1c.28 0 .5.22.5.5 0 .46.07 1.22.47 1.84.38.6 1.08 1.14 2.53 1.14a.5.5 0 1 1 0 1 3.5 3.5 0 0 0-1.82.73A2.77 2.77 0 0 0 15 8.45a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5c0-.5-.16-1.26-.6-1.88-.44-.6-1.16-1.1-2.4-1.1a.5.5 0 0 1-.5-.5c0-.27.22-.5.5-.5.51 0 1.25 0 1.87-.36.57-.33 1.13-1 1.13-2.61 0-.28.22-.5.5-.5Zm.04 2.73a2.95 2.95 0 0 1-1.33 1.33 3.53 3.53 0 0 1 1.33 1.48 4.2 4.2 0 0 1 1.52-1.44 3.22 3.22 0 0 1-1.52-1.37Zm-7.26 6.8A4.46 4.46 0 0 1 10 2.5c.9 0 1.74.26 2.44.72a.99.99 0 0 0 .32-.38c.06-.12.12-.28.16-.5A5.5 5.5 0 0 0 4.5 6.96c0 1.67.75 3.16 1.93 4.16l-1.22 4.44c-.17.62.08 1.35.74 1.64 1.64.73 4.65 1.35 7.97.01a1.43 1.43 0 0 0 .82-1.75l-1.26-4.17a.49.49 0 0 0-.03-.07c.45-.36.85-.8 1.16-1.28a1.53 1.53 0 0 1-1.01-.3 4.5 4.5 0 0 1-6.32.89Zm5.3 1.26 1.2 3.96c.07.24-.05.46-.23.54a9.36 9.36 0 0 1-7.19 0c-.14-.06-.24-.24-.18-.47l1.12-4.1a5.5 5.5 0 0 0 5.28.07Z";
   var pathdfilled = "M14.5 1c.28 0 .5.22.5.5 0 .46.07 1.22.47 1.84.38.6 1.08 1.14 2.53 1.14a.5.5 0 1 1 0 1 3.5 3.5 0 0 0-1.82.73A2.77 2.77 0 0 0 15 8.45a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5c0-.5-.16-1.26-.6-1.88-.44-.6-1.16-1.1-2.4-1.1a.5.5 0 0 1-.5-.5c0-.27.22-.5.5-.5.51 0 1.25 0 1.87-.36.57-.33 1.13-1 1.13-2.61 0-.28.22-.5.5-.5ZM6.15 12.17l-.94 3.4c-.17.61.08 1.34.74 1.63 1.64.73 4.65 1.35 7.97.01a1.43 1.43 0 0 0 .82-1.75l-.98-3.23a6.5 6.5 0 0 1-7.61-.06Zm6.77-9.84c-.04.22-.1.38-.16.5a.97.97 0 0 1-.4.42c-.34.2-.82.23-1.36.23a1.5 1.5 0 1 0 0 2.98c.91 0 1.34.35 1.58.7.3.4.42.95.42 1.3a1.5 1.5 0 0 0 1.61 1.48A5.5 5.5 0 0 1 4.5 6.96a5.48 5.48 0 0 1 8.42-4.63Z";
   
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