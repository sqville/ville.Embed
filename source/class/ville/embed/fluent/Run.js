/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Run",
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

   var pathdregular = "M7 2.41a.5.5 0 0 0-.59-.4.5.5 0 0 0-.4.57v.05A5.63 5.63 0 0 0 2.7 5.15C2.13 6.15 2.01 7.2 2 8l-.67.84a1.5 1.5 0 0 0 .33 2.18l8.66 5.86A6.5 6.5 0 0 0 13.96 18h2.79c1.24 0 2.25-1 2.25-2.25 0-1.26-1.02-2.18-2.07-2.51a2.8 2.8 0 0 1-1.51-1l-3.02-5.2.19-.02a.5.5 0 0 0 .4-.58.5.5 0 0 0-.58-.4A4.65 4.65 0 0 1 7 2.4Zm4.27 4.68 3.29 5.66.01.03a3.77 3.77 0 0 0 2.06 1.41c.48.16.89.45 1.13.81h-3.77c-.7 0-1.38-.2-1.96-.6l-1.69-1.14 1.03-.6c.6-.34.8-1.1.46-1.7l-.77-1.33c-.34-.6-1.1-.8-1.7-.46l-2.74 1.58-.95-.64.7-.41c.6-.35.81-1.11.46-1.71l-2.1-3.63a6 6 0 0 1 1.57-.77 5.68 5.68 0 0 0 4.97 3.5Zm-1.99 6.66.05.09.05-.02 2.1 1.41c.74.5 1.61.77 2.51.77h3.99c-.12.57-.63 1-1.23 1h-2.79a5.5 5.5 0 0 1-3.08-.95L2.22 10.2a.5.5 0 0 1-.1-.72l.28-.36 4.15 2.8.01.02h.02l2.7 1.82Zm.14-1.11-1.88-1.27 2.31-1.34a.25.25 0 0 1 .35.1l.76 1.33c.07.11.03.27-.09.34l-1.45.84Zm-5.86-7c.12-.2.25-.4.42-.6L5.97 8.5c.07.12.03.27-.1.34l-1.13.65L3 8.31v-.13c0-.77.08-1.7.56-2.54Z";
   var pathdfilled = "M7 2.4A.5.5 0 1 0 6 2.6v.04A5.63 5.63 0 0 0 2.7 5.15C2.13 6.15 2.01 7.2 2 8l-.67.84a1.5 1.5 0 0 0 .33 2.18l8.66 5.86A6.5 6.5 0 0 0 13.96 18h2.79a2.25 2.25 0 0 0 2.23-2.57c-.16-1.1-1.09-1.89-2.05-2.19a2.8 2.8 0 0 1-1.51-1l-3.02-5.2.18-.02a.5.5 0 1 0-.17-.99A4.65 4.65 0 0 1 7 2.41Zm-2.33 2 2.2 3.8a1 1 0 0 1-.37 1.38l-.87.5L3 8.3v-.13c0-.77.08-1.7.56-2.54.24-.43.6-.85 1.11-1.23Zm2.16 6.5 3.05-1.77a1 1 0 0 1 1.36.37l.6 1.04a1 1 0 0 1-.36 1.37l-1.7.98-2.95-2ZM14 16h3.99c-.12.57-.63 1-1.23 1h-2.79a5.5 5.5 0 0 1-3.08-.95L2.22 10.2a.5.5 0 0 1-.1-.72l.28-.36 9.07 6.12c.75.5 1.62.77 2.52.77ZM2.11 9.47l-.39-.32Z";
   
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